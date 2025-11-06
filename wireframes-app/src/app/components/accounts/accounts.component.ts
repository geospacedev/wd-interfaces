import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { usersData } from '../../data/users-data';
import { IUser } from '@wd-platform/interfaces/IUser';
import { UserRoleType, UnitOfMeasureType } from '@wd-platform/enums/enums';

type SortColumn = 'name' | 'role' | 'organizationName' | 'unitOfMeasureType' | 'dateLastLogin';
type SortDirection = 'asc' | 'desc';

@Component({
  selector: 'app-accounts',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.css'
})
export class AccountsComponent {
  usersData: IUser[] = usersData;
  activeFilter: 'users' | 'organizations' = 'users';
  
  // Filtering
  filterText: string = '';
  filteredUsers: IUser[] = [...usersData];
  
  // Sorting
  sortColumn: SortColumn | null = null;
  sortDirection: SortDirection = 'asc';

  setFilter(filter: 'users' | 'organizations') {
    this.activeFilter = filter;
  }

  applyFilter() {
    const searchTerm = this.filterText.toLowerCase().trim();
    
    if (!searchTerm) {
      this.filteredUsers = [...this.usersData];
    } else {
      this.filteredUsers = this.usersData.filter(user => {
        const fullName = this.getFullName(user).toLowerCase();
        const role = this.getRoleDisplay(user.role).toLowerCase();
        const orgName = (user.organizationName || '').toLowerCase();
        const unitOfMeasure = this.getUnitOfMeasureDisplay(user.unitOfMeasureType).toLowerCase();
        
        return fullName.includes(searchTerm) ||
               role.includes(searchTerm) ||
               orgName.includes(searchTerm) ||
               unitOfMeasure.includes(searchTerm);
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
    this.filteredUsers.sort((a, b) => {
      let aValue: any;
      let bValue: any;
      
      switch (column) {
        case 'name':
          aValue = this.getFullName(a);
          bValue = this.getFullName(b);
          break;
        case 'role':
          aValue = a.role;
          bValue = b.role;
          break;
        case 'organizationName':
          aValue = a.organizationName || '';
          bValue = b.organizationName || '';
          break;
        case 'unitOfMeasureType':
          aValue = a.unitOfMeasureType;
          bValue = b.unitOfMeasureType;
          break;
        case 'dateLastLogin':
          aValue = a.dateLastLogin ? new Date(a.dateLastLogin).getTime() : 0;
          bValue = b.dateLastLogin ? new Date(b.dateLastLogin).getTime() : 0;
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

  get displayedUsers(): IUser[] {
    return this.filteredUsers;
  }

  getFullName(user: IUser): string {
    return `${user.firstName} ${user.lastName}`;
  }

  getRoleDisplay(role: UserRoleType): string {
    switch (role) {
      case UserRoleType.user:
        return 'User';
      case UserRoleType.admin:
        return 'Admin';
      case UserRoleType.superAdmin:
        return 'Super Admin';
      default:
        return 'Unknown';
    }
  }

  getUnitOfMeasureDisplay(unitOfMeasure: UnitOfMeasureType): string {
    switch (unitOfMeasure) {
      case UnitOfMeasureType.imperial:
        return 'Imperial';
      case UnitOfMeasureType.metric:
        return 'Metric';
      default:
        return 'Unknown';
    }
  }

  formatDate(date?: Date): string {
    if (!date) return '-';
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }

  get organizations(): { id: string; name: string; users: IUser[] }[] {
    if (this.activeFilter !== 'organizations') {
      return [];
    }

    const orgMap = new Map<string, { id: string; name: string; users: IUser[] }>();
    
    this.usersData.forEach(user => {
      if (user.organizationId && user.organizationName) {
        if (!orgMap.has(user.organizationId)) {
          orgMap.set(user.organizationId, {
            id: user.organizationId,
            name: user.organizationName,
            users: []
          });
        }
        orgMap.get(user.organizationId)!.users.push(user);
      }
    });

    return Array.from(orgMap.values()).sort((a, b) => a.name.localeCompare(b.name));
  }
}