export interface ITeamData {
  id: number;
  title: string;
  description: string;
}

export const teamData: ITeamData[] = [
  {
    id: 1,
    title: 'Director',
    description:
      'Assessment of organizational needs and the design, implementation and evaluation of programs that facilitate the professional development and continuous learning of team members, particularly employee.',
  },
  {
    id: 2,
    title: 'Team head',
    description:
      'Team can create a harmonious work environment by encouraging the acceptance of differences. The workplace is becoming increasingly diverse and is welcoming more people with different experiences than in previous decades.',
  },
  {
    id: 3,
    title: 'Technical head',
    description:
      'Digitalization is an integral part of Amritomed organization and underpins almost every process, calculation, and transaction.',
  },
];
