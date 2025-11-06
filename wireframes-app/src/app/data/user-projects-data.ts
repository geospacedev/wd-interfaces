import { IUserProject } from '@wd-platform/interfaces/IUserProject';
import { UserProjectType } from '@wd-platform/enums/enums';

export const userProjectsData: IUserProject[] = [
  {
    id: '880e8400-e29b-41d4-a716-446655440001',
    userId: '550e8400-e29b-41d4-a716-446655440001',
    projectId: '990e8400-e29b-41d4-a716-446655440001',
    type: UserProjectType.owner
  },
  {
    id: '880e8400-e29b-41d4-a716-446655440002',
    userId: '550e8400-e29b-41d4-a716-446655440001',
    projectId: '990e8400-e29b-41d4-a716-446655440002',
    type: UserProjectType.collaborator
  },
  {
    id: '880e8400-e29b-41d4-a716-446655440003',
    userId: '550e8400-e29b-41d4-a716-446655440002',
    projectId: '990e8400-e29b-41d4-a716-446655440003',
    type: UserProjectType.owner
  },
  {
    id: '880e8400-e29b-41d4-a716-446655440004',
    userId: '550e8400-e29b-41d4-a716-446655440003',
    projectId: '990e8400-e29b-41d4-a716-446655440004',
    type: UserProjectType.viewer
  },
  {
    id: '880e8400-e29b-41d4-a716-446655440005',
    userId: '550e8400-e29b-41d4-a716-446655440003',
    projectId: '990e8400-e29b-41d4-a716-446655440005',
    type: UserProjectType.owner
  },
  {
    id: '880e8400-e29b-41d4-a716-446655440006',
    userId: '550e8400-e29b-41d4-a716-446655440004',
    projectId: '990e8400-e29b-41d4-a716-446655440006',
    type: UserProjectType.collaborator
  },
  {
    id: '880e8400-e29b-41d4-a716-446655440007',
    userId: '550e8400-e29b-41d4-a716-446655440005',
    projectId: '990e8400-e29b-41d4-a716-446655440007',
    type: UserProjectType.owner
  },
  {
    id: '880e8400-e29b-41d4-a716-446655440008',
    userId: '550e8400-e29b-41d4-a716-446655440006',
    projectId: '990e8400-e29b-41d4-a716-446655440008',
    type: UserProjectType.viewer
  },
  {
    id: '880e8400-e29b-41d4-a716-446655440009',
    userId: '550e8400-e29b-41d4-a716-446655440007',
    projectId: '990e8400-e29b-41d4-a716-446655440009',
    type: UserProjectType.owner
  },
  {
    id: '880e8400-e29b-41d4-a716-446655440010',
    userId: '550e8400-e29b-41d4-a716-446655440008',
    projectId: '990e8400-e29b-41d4-a716-446655440010',
    type: UserProjectType.collaborator
  }
];
