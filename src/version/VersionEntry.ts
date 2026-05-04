export interface VersionEntry {
  version: string;
  commit: string;
  date: string;
  description: string;
  additions: string[];
  reworks: string[];
  removals: string[];
}
