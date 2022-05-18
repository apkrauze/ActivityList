type Sector = { 
    name: string;
    reference: string;
}

type ActivityNaceCode = {
  code: string;
}

export interface Activity {
  name: string;
  description: string;
  reference: string;
  sector: Sector;
  naceCodes?: ActivityNaceCode[];
}

export interface TableProps {
  activities: Activity[]
}