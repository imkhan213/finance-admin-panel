export interface icon {
  name: string;
  type?: string;
}

export interface ValidCondition {
  cond1: boolean;
  cond2?: boolean;
  form_submit: boolean;
}

export interface signin {
  cEmail: string;
  cPass: string;
}

export interface signup {
  cName: string;
  dDob: string;
  cEmail: boolean;
  cPass: string;
  bCheck: boolean;
}
