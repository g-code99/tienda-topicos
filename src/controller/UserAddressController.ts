import { Get, Route, Tags } from "tsoa";
import { IUserAddressController } from "./interfaces";
import { LogSuccess, LogError } from "../utils/logger";

// ORM
import { getAllUserAddress } from "../domain/orm/UserAddress.orm";
import { BasicResponse } from "./types";

@Route("/api/v1/users/address")
@Tags("UserAddressController")
export class UserAddressController implements IUserAddressController {
  /**
   * Endpoint to retreive the suppliers in the Collection "Suppliers" of Database
   * @returns all Suppliers
   */
  public async getUserAddress(): Promise<any> {
    LogSuccess("[/api/v1/suppliers] Get All Address Request");

    const response = await getAllUserAddress();
    
    return response
  }
}
