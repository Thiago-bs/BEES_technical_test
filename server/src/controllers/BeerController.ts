import {Request, Response} from 'express';
import { getRepository } from 'typeorm'

import Beer from '../models/Beer'

import beerView from '../views/beers_view'
import * as Yup from 'yup'

export default {
    async index(request: Request, response: Response){
        const beersRepository = getRepository(Beer);
        const beers = await beersRepository.find();
        return response.json(beerView.renderMany(beers));

    },
    async show(request: Request, response: Response){
        const {id} = request.params;
        const beersRepository = getRepository(Beer);
        const beer = await beersRepository.findOneOrFail(id);
        return response.json(beerView.render(beer));

    },
    async create(request: Request, response: Response){
        console.log(request.body);
        const {
            name,
            detail,
            cost,  
            promotion,
            image_url,
        } = request.body;
    
        const beersRepository = getRepository(Beer);

        const data = {
            name,
            detail,
            cost,  
            promotion,
            image_url, 
        }

        const schema = Yup.object().shape({
            name: Yup.string().required(),
            detail: Yup.string().required(),
            cost: Yup.number().required(),
            promotion: Yup.string().required().max(300),
            image_url: Yup.string().required(),

        })
    
        await schema.validate(data, {
            abortEarly: false,
        });

        const beer = beersRepository.create(data)
        await beersRepository.save(beer);
    
        response.status(201).json(beer);
    }
}