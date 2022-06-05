import * as pensionService from './pension-service.js';
import * as taxService from './tax-service.js';

export function netSalary(employee) {

    const pension = pensionService.discount(employee.grossSalary);
    const tax = taxService.tax(employee.grossSalary);
    
    return employee.grossSalary - pension - tax;
}
