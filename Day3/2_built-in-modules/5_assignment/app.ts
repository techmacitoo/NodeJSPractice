import { Account } from "./account";

let a1 = new Account(1, 1000, 0.05);

a1.deposit(1000);
a1.withdraw(2000);
a1.withdraw(1000);