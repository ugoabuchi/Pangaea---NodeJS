import express from 'express';

import PublishService from '../services/publish.service';

import debug from 'debug';

const log: debug.IDebugger = debug('app:users-controller');
class PublishController {

    async listPublishedContent(req: express.Request, res: express.Response) {
        const publishContents = await PublishService.readAll();
        res.status(200).send(publishContents);
    }

    async listPublishedContentById(req: express.Request, res: express.Response) {
        const publishContents = await PublishService.readByIdAll(req.body.topic);
        res.status(200).send(publishContents);
    }

    async getById(req: express.Request, res: express.Response) {
        const publishContents = await PublishService.readById(req.body.topic);
        res.status(200).send(publishContents);
    }

    async publishNewContent(req: express.Request, res: express.Response) {
        const publishContents = await PublishService.create(req.body);
        
        res.status(201).send(publishContents);
    }

    async removePublishedContent(req: express.Request, res: express.Response) {
        const status = await PublishService.deleteById(req.body.id);
        res.status(204).send(status);
    }
}

export default new PublishController();