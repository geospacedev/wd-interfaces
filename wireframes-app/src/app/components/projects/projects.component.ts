import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { projectsData } from '../../data/projects-data';
import { IProject } from '@wd-platform/interfaces/IProject';
import { ProductStatusType } from '@wd-platform/enums/enums';

type SortColumn = 'name' | 'status' | 'dateCreated' | 'dateModified';
type SortDirection = 'asc' | 'desc';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projectsData: IProject[] = projectsData;
  
  // Filtering
  filterText: string = '';
  filteredProjects: IProject[] = [...projectsData];
  
  // Sorting
  sortColumn: SortColumn | null = null;
  sortDirection: SortDirection = 'asc';

  applyFilter() {
    const searchTerm = this.filterText.toLowerCase().trim();
    
    if (!searchTerm) {
      this.filteredProjects = [...this.projectsData];
    } else {
      this.filteredProjects = this.projectsData.filter(project => {
        const name = project.name.toLowerCase();
        const description = (project.description || '').toLowerCase();
        const status = this.getStatusDisplay(project.currentStatus).toLowerCase();
        const city = project.address.city.toLowerCase();
        const state = (project.address.state || '').toLowerCase();
        
        return name.includes(searchTerm) ||
               description.includes(searchTerm) ||
               status.includes(searchTerm) ||
               city.includes(searchTerm) ||
               state.includes(searchTerm);
      });
    }
    
    // Reapply sorting after filtering
    if (this.sortColumn) {
      this.sortData(this.sortColumn, this.sortDirection);
    }
  }

  sortBy(column: SortColumn) {
    if (this.sortColumn === column) {
      // Toggle direction if same column
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      // New column, default to ascending
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }
    
    this.sortData(column, this.sortDirection);
  }

  private sortData(column: SortColumn, direction: SortDirection) {
    this.filteredProjects.sort((a, b) => {
      let aValue: any;
      let bValue: any;
      
      switch (column) {
        case 'name':
          aValue = a.name;
          bValue = b.name;
          break;
        case 'status':
          aValue = a.currentStatus;
          bValue = b.currentStatus;
          break;
        case 'dateCreated':
          aValue = new Date(a.dateCreated).getTime();
          bValue = new Date(b.dateCreated).getTime();
          break;
        case 'dateModified':
          aValue = new Date(a.dateModified).getTime();
          bValue = new Date(b.dateModified).getTime();
          break;
      }
      
      // Handle null/undefined values
      if (aValue == null) aValue = '';
      if (bValue == null) bValue = '';
      
      let comparison = 0;
      if (aValue < bValue) {
        comparison = -1;
      } else if (aValue > bValue) {
        comparison = 1;
      }
      
      return direction === 'asc' ? comparison : -comparison;
    });
  }

  get displayedProjects(): IProject[] {
    return this.filteredProjects;
  }

  getStatusDisplay(status: ProductStatusType): string {
    switch (status) {
      case ProductStatusType.created:
        return 'Created';
      case ProductStatusType.scanStarted:
        return 'Scan Started';
      case ProductStatusType.scanError:
        return 'Scan Error';
      case ProductStatusType.scanCompleted:
        return 'Scan Completed';
      case ProductStatusType.processingStarted:
        return 'Processing Started';
      case ProductStatusType.processingError:
        return 'Processing Error';
      case ProductStatusType.processingCompleted:
        return 'Processing Completed';
      case ProductStatusType.modelCreated:
        return 'Model Created';
      case ProductStatusType.modelError:
        return 'Model Error';
      case ProductStatusType.modelCompleted:
        return 'Model Completed';
      default:
        return 'Unknown';
    }
  }

  formatDate(date: Date): string {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }

  formatBoolean(value: boolean): string {
    return value ? 'Yes' : 'No';
  }

  isStatusScanCompletedOrHigher(status: ProductStatusType): boolean {
    return status >= ProductStatusType.scanCompleted;
  }

  isStatusModelCompletedOrHigher(status: ProductStatusType): boolean {
    return status >= ProductStatusType.modelCompleted;
  }

  isStatusError(status: ProductStatusType): boolean {
    const statusKey = ProductStatusType[status];
    return statusKey?.toLowerCase().includes('error') || false;
  }
}