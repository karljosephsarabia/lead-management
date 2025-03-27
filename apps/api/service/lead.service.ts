import { LeadInput } from "../dto/lead.dto";
import { LeadModel } from "../model/lead.model";


class LeadService {

    async addNewLead(data: LeadInput) {
        return await LeadModel.create(data);
    }

    async getAllLeads() {
        return await LeadModel.find();
    }
}

export default new LeadService;