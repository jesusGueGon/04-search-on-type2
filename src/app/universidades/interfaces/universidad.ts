export interface Universidad {
  country:          Country;
  alpha_two_code:   AlphaTwoCode;
  name:             string;
  domains:          string[];
  web_pages:        string[];
}

export enum AlphaTwoCode {
  Tr = "TR",
}

export enum Country {
  Turkey = "Turkey",
}
