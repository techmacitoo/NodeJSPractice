var d1: number;
d1 = 10;

var d2: string;
d2 = "Manish";

var d3: any;
d3 = 10;
d3 = "Manish";
d3 = true;

var d4: number | string;
d4 = 10;
d4 = "Manish";
// d4 = true;   // Error: Type 'true' is not assignable to type 'number | string'.

var d5: number | string | boolean;
d5 = 10;
d5 = "Manish";
d5 = true;