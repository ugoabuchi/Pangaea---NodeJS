import express from 'express';
import SubscriptionsService from '../services/subscriptions.service';
import debug from 'debug';

const log: debug.IDebugger = debug('app:users-controller');
class SubscriptionMiddleware {

    async validateRequiredSubscriptionBodyFields(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        if (req.body && req.body.url && req.body.topic) {
            next();
        } else {
            res.status(400).send({
                error: 'Missing required fields url and topic',
            });
        }
    }

    async validateSameTopicDoesntExist(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        const subscription = await SubscriptionsService.readById(req.body.topic);
        if (subscription) {
            res.status(400).send({ error: 'Topic already exists' });
        } else {
            next();
        }
    }

    async validateSameUrlDoesntExistInTopic(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        const subscription = await SubscriptionsService.readByIdAndUrl(req.body.topic, req.body.url);
        if (subscription) {
            res.status(400).send({ error: 'Subscription already exists' });
        } else {
            next();
        }
    }


    async validateSameTopicBelongToSameUser(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        const subscription = await SubscriptionsService.readById(req.body.topic);
        if (subscription && subscription.id === req.params.topic) {
            next();
        } else {
            res.status(400).send({ error: 'Invalid topic' });
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
        next();
    }


}

export default new SubscriptionMiddleware();