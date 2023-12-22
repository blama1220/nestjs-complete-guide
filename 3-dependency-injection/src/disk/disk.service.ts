import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
    constructor(private powerService: PowerService) { }

    getData() {
        console.log("DiskService.getData")
        return this.powerService.supplyPower(20)
    }
}

