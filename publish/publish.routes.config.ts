import {CommonRoutesConfig} from '../common/common.routes.config';
import PublishController from '../controllers/publish.controller';
import SubscriptionMiddleware from '../middleware/subscription.middleware';
import PublishMiddleware from '../middleware/publish.middleware';
import express from 'express';
import publishController from '../controllers/publish.controller';

export class PublishRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'PublishRoutes');
    }

    configureRoutes() {
        
        this.app
            .route('/publish')
            .get(PublishController.listPublishedContent);

        this.app.param('topic', PublishMiddleware.extractTopic);
        this.app
            .route('/publish/:topic')
            .get(PublishMiddleware.validateTopicExists,
                publishController.listPublishedContentById)
            .delete(SubscriptionMiddleware.validateTopicExists,
                publishController.removePublishedContent)
            .post(
                PublishMiddleware.validateRequiredPublishBodyFields,
                SubscriptionMiddleware.validateTopicExists,
                publishController.publishNewContent
            );

        return this.app;
    }
}