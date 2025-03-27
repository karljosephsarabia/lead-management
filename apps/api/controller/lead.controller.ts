import { NextFunction, Request, Response } from "express";
import { NewLeadDto } from "../dto/lead.dto";
import LeadService from "../service/lead.service";


class LeadController {

    async addNewLead(req: Request, res: Response, next: NextFunction) {
        try {
            const data = NewLeadDto.parse(req.body);
            const newLead = await LeadService.addNewLead(data);
            return res.status(200).json({
                status: "success",
                message: "Lead created successfully",
                data: newLead
            });
        } catch (err) {
            next(err);
        }
    }

    async getAllLead(req: Request, res: Response, next: NextFunction) {
        try {
            const data = await LeadService.getAllLeads();
            return res.status(200).json({
                status: "success",
                data: data
            });
        } catch (err) {
            next(err);
        }
    }
}


export default new LeadController;
