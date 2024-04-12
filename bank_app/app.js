class BankAccount {
    #accountNumber;
    #ownerName;
    #balance;
    constructor(accountNumber, ownerName, balance){
        this.#accountNumber = accountNumber;
        this.#ownerName = ownerName;
        this.#balance = balance;
    }
    deposit(amount){
        this.#balance = parseInt(amount) + parseInt(this.#balance);
        console.log(`$${amount} Successfully deposited`);
    }
    withdraw(amount){
        if(this.#balance < amount) {
            console.log("Insufficient Balance!")
        }else {
            this.#balance = parseInt(this.#balance - parseInt(amount));
            console.log(`$${amount} Successfully withdrawn`);
        }
    }
    getBalance(){
        console.log("Current Balance: " + this.#balance);
    }
    displayAccountInfo() {
        console.log(`Account Number: ${this.#accountNumber} \nOwner Name: ${this.#ownerName} \nBalance: $${this.#balance}`); 
    }
}

const Nayem = new BankAccount(101, "Mehedi Hasan Nayem", 5000);
Nayem.displayAccountInfo();
Nayem.deposit(500);
Nayem.getBalance();
Nayem.withdraw(5000);
Nayem.getBalance();
console.log("=================================");
const Hasan = new BankAccount(102, "Hasan Shahriar", 1000);
Hasan.displayAccountInfo();
Hasan.deposit(23000);
Hasan.getBalance();
Hasan.withdraw(8000);
Hasan.getBalance();