import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {

    constructor(private powerService: PowerService) { };

    compute(a: number, b: number) {
        console.log("CpuService.compute")
        return this.powerService.supplyPower(a + b);
    }
}
