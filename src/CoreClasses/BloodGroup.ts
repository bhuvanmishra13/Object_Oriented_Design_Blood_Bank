class BloodGroup {
    private bloodGroup: string = null;

    constructor(bloodGroup: string) {
        switch (bloodGroup) {
            case 'O+':
                this.bloodGroup = bloodGroup;
                break;
            case 'O-':
                this.bloodGroup = bloodGroup;
                break;
            default:
                console.log("Blood group not supported!");
        }
    }

    getBloodGroup() {
        return this.bloodGroup;
    }

    isBloodGroupSet(): boolean {
        if (this.bloodGroup === null) {
            return false;
        }
        else {
            return true;
        }
    }

}

export default BloodGroup;