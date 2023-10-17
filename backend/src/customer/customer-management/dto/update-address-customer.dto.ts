import { PartialType } from "@nestjs/mapped-types";
import { CreateAddressCustomerDto } from "./create-address-customer.dto";

export class UpdateAddressCustomerDto extends PartialType(CreateAddressCustomerDto) {}
