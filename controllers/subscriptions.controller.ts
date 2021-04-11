import express from 'express';

import SubscriptionsService from '../services/subscriptions.service';

import debug from 'debug';

const log: debug.IDebugger = debug('app:users-controller');
class SubscriptionController {

    async listSubscriptions(req: express.Request, res: express.Response) {
        const subscriptions = await SubscriptionsService.readAll();
        res.status(200).send(subscriptions);
    }

    async listSubscriptionsById(req: express.Request, res: express.Response) {
        const subscriptions = await SubscriptionsService.readByIdAll(req.body.topic);
        res.status(200).send(subscriptions);
    }

    async getById(req: express.Request, res: express.Response) {
        const subscription = await SubscriptionsService.readById(req.body.topic);
        res.status(200).send(subscription);
    }

    async getByIdandUrl(req: express.Request, res: express.Response) {
        const subscription = await SubscriptionsService.readByIdAndUrl(req.body.topic, req.body.url);
        res.status(200).send(subscription);
    }

    async createSubscription(req: express.Request, res: express.Response) {
        const subscription = await SubscriptionsService.create(req.body);
        
        res.status(201).send(subscription);
    }

    

    async removeSubscription(req: express.Request, res: express.Response) {
        const status = await SubscriptionsService.deleteById(req.body.id);
        res.status(204).send(status);
    }
}

export default new SubscriptionController();