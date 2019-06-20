import BloodInfo from "./BloodInfo";
import Person from './Person';

class Donar extends Person {
    private bloodInfo: BloodInfo;

    constructor(name: string, phone: number, bloodInfo: BloodInfo) {
        super(name, phone);
        this.bloodInfo = bloodInfo;
    }

    getDonarName() {
        return this.name;
    }

    getDonarPhone() {
        return this.phone;
    }

    getDonarBloodInfo() {
        return this.bloodInfo;
    }
}

export default Donar;