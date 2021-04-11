import express from 'express';
import SubscriptionsService from '../services/subscriptions.service';
import debug from 'debug';

const log: debug.IDebugger = debug('app:users-controller');
class PublishMiddleware {

    async validateRequiredPublishBodyFields(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        if (req.body && req.body.topic && req.body.message) {
            next();
        } else {
            res.status(400).send({
                error: 'Missing required fields topic and message',
            });
        }
    }

    async validateTopicExists(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        const subscription = await SubscriptionsService.readById(req.params.topic);
        if (subscription) {
            next();
        } else {
            res.status(404).send({
                error: `Topic ${req.params.topic} not found`,
            });
        }
    }

    async extractTopic(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {

        req.body.topic = req.params.topic;
        const subscriptions = await SubscriptionsService.readByIdAll(req.body.topic);
        req.body.data = {
            message: req.body.message,
            data: subscriptions
        }
        next();
    }


}

export default new PublishMiddleware();