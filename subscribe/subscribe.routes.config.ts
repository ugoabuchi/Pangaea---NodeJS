import {CommonRoutesConfig} from '../common/common.routes.config';
import SubscriptionController from '../controllers/subscriptions.controller';
import SubscriptionMiddleware from '../middleware/subscription.middleware';
import express from 'express';

export class SubscribeRoutes extends CommonRoutesConfig {

    constructor(app: express.Application) {
        super(app, 'SubscribeRoutes');
    }

    configureRoutes() {
        
        this.app
            .route('/subscribe')
            .get(SubscriptionController.listSubscriptions);

        this.app.param('topic', SubscriptionMiddleware.extractTopic);
        this.app
            .route('/subscribe/:topic')
            .get(SubscriptionMiddleware.validateTopicExists,
                SubscriptionController.listSubscriptionsById)
            .delete(SubscriptionMiddleware.validateTopicExists,
                SubscriptionController.removeSubscription)
            .post(
                SubscriptionMiddleware.validateRequiredSubscriptionBodyFields,
                SubscriptionMiddleware.validateSameUrlDoesntExistInTopic,
                SubscriptionController.createSubscription
            );



        return this.app;
    }
}