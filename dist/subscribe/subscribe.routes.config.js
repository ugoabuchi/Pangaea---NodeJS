"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscribeRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const subscriptions_controller_1 = __importDefault(require("../controllers/subscriptions.controller"));
const subscription_middleware_1 = __importDefault(require("../middleware/subscription.middleware"));
class SubscribeRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'SubscribeRoutes');
    }
    configureRoutes() {
        this.app
            .route('/subscribe')
            .get(subscriptions_controller_1.default.listSubscriptions);
        this.app.param('topic', subscription_middleware_1.default.extractTopic);
        this.app
            .route('/subscribe/:topic')
            .get(subscription_middleware_1.default.validateTopicExists, subscriptions_controller_1.default.listSubscriptionsById)
            .delete(subscription_middleware_1.default.validateTopicExists, subscriptions_controller_1.default.removeSubscription)
            .post(subscription_middleware_1.default.validateRequiredSubscriptionBodyFields, subscription_middleware_1.default.validateSameUrlDoesntExistInTopic, subscriptions_controller_1.default.createSubscription);
        return this.app;
    }
}
exports.SubscribeRoutes = SubscribeRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Vic2NyaWJlLnJvdXRlcy5jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdWJzY3JpYmUvc3Vic2NyaWJlLnJvdXRlcy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEseUVBQWtFO0FBQ2xFLHVHQUE2RTtBQUM3RSxvR0FBMkU7QUFHM0UsTUFBYSxlQUFnQixTQUFRLHlDQUFrQjtJQUVuRCxZQUFZLEdBQXdCO1FBQ2hDLEtBQUssQ0FBQyxHQUFHLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsZUFBZTtRQUVYLElBQUksQ0FBQyxHQUFHO2FBQ0gsS0FBSyxDQUFDLFlBQVksQ0FBQzthQUNuQixHQUFHLENBQUMsa0NBQXNCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUVuRCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsaUNBQXNCLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLEdBQUc7YUFDSCxLQUFLLENBQUMsbUJBQW1CLENBQUM7YUFDMUIsR0FBRyxDQUFDLGlDQUFzQixDQUFDLG1CQUFtQixFQUMzQyxrQ0FBc0IsQ0FBQyxxQkFBcUIsQ0FBQzthQUNoRCxNQUFNLENBQUMsaUNBQXNCLENBQUMsbUJBQW1CLEVBQzlDLGtDQUFzQixDQUFDLGtCQUFrQixDQUFDO2FBQzdDLElBQUksQ0FDRCxpQ0FBc0IsQ0FBQyxzQ0FBc0MsRUFDN0QsaUNBQXNCLENBQUMsaUNBQWlDLEVBQ3hELGtDQUFzQixDQUFDLGtCQUFrQixDQUM1QyxDQUFDO1FBSU4sT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ3BCLENBQUM7Q0FDSjtBQTdCRCwwQ0E2QkMifQ==