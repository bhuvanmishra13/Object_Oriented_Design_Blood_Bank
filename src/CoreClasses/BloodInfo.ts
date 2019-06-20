import BloodGroup from './BloodGroup';

class BloodInfo {
    private bloodGroup: BloodGroup;
    private plateletCount: number;

    constructor(bloodGroup: BloodGroup, plateletCount: number) {
        this.bloodGroup = bloodGroup;
        this.plateletCount = plateletCount;
    }

    getbloodGroup() {
        return this.bloodGroup;
    }

    getPlateletCount() {
        return this.plateletCount;
    }
}

export default BloodInfo;