import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { usersData } from '../../data/users-data';
import { userProjectsData } from '../../data/user-projects-data';
import { IUser } from '@wd-platform/interfaces/IUser';
import { IUserProject } from '@wd-platform/interfaces/IUserProject';
import { UserRoleType, OrganizationRoleType, UnitOfMeasureType, UnitOfMeasurePrecisionType, UserProjectType } from '@wd-platform/enums/enums';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit {
  user: IUser | null = null;
  userProjects: IUserProject[] = [];
  isEditMode: boolean = false;
  editedUser: IUser | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const userId = this.route.snapshot.paramMap.get('userId');
    if (userId) {
      this.user = usersData.find(u => u.id === userId) || null;
      if (this.user) {
        this.userProjects = userProjectsData.filter(up => up.userId === userId);
        // Create a copy for editing
        this.editedUser = { ...this.user };
      }
    }
  }

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
  }

  updateFeatureFlags(value: string) {
    if (this.editedUser) {
      this.editedUser.featureFlags = value ? value.split(',').map(f => f.trim()).filter(f => f.length > 0) : [];
    }
  }

  getFeatureFlagsString(): string {
    return this.editedUser?.featureFlags?.join(', ') || '';
  }

  getUserRoleDisplay(role: UserRoleType): string {
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

  getOrganizationRoleDisplay(role?: OrganizationRoleType): string {
    if (role === undefined) return '-';
    switch (role) {
      case OrganizationRoleType.member:
        return 'Member';
      case OrganizationRoleType.admin:
        return 'Admin';
      case OrganizationRoleType.owner:
        return 'Owner';
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

  getUnitOfMeasurePrecisionDisplay(precision: UnitOfMeasurePrecisionType): string {
    switch (precision) {
      case UnitOfMeasurePrecisionType.zero:
        return 'Zero (m)';
      case UnitOfMeasurePrecisionType.half:
        return 'Half (cm)';
      case UnitOfMeasurePrecisionType.quarter:
        return 'Quarter (mm)';
      case UnitOfMeasurePrecisionType.eighth:
        return 'Eighth';
      default:
        return 'Unknown';
    }
  }

  getUserProjectTypeDisplay(type: UserProjectType): string {
    switch (type) {
      case UserProjectType.owner:
        return 'Owner';
      case UserProjectType.collaborator:
        return 'Collaborator';
      case UserProjectType.viewer:
        return 'Viewer';
      default:
        return 'Unknown';
    }
  }

  formatDate(date?: Date): string {
    if (!date) return '-';
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  formatBoolean(value?: boolean): string {
    if (value === undefined) return '-';
    return value ? 'Yes' : 'No';
  }

  formatArray(value?: string[]): string {
    if (!value || value.length === 0) return '-';
    return value.join(', ');
  }
}