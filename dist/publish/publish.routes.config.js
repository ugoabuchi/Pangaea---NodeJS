"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublishRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const publish_controller_1 = __importDefault(require("../controllers/publish.controller"));
const subscription_middleware_1 = __importDefault(require("../middleware/subscription.middleware"));
const publish_middleware_1 = __importDefault(require("../middleware/publish.middleware"));
const publish_controller_2 = __importDefault(require("../controllers/publish.controller"));
class PublishRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'PublishRoutes');
    }
    configureRoutes() {
        this.app
            .route('/publish')
            .get(publish_controller_1.default.listPublishedContent);
        this.app.param('topic', publish_middleware_1.default.extractTopic);
        this.app
            .route('/publish/:topic')
            .get(publish_middleware_1.default.validateTopicExists, publish_controller_2.default.listPublishedContentById)
            .delete(subscription_middleware_1.default.validateTopicExists, publish_controller_2.default.removePublishedContent)
            .post(publish_middleware_1.default.validateRequiredPublishBodyFields, subscription_middleware_1.default.validateTopicExists, publish_controller_2.default.publishNewContent);
        return this.app;
    }
}
exports.PublishRoutes = PublishRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGlzaC5yb3V0ZXMuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcHVibGlzaC9wdWJsaXNoLnJvdXRlcy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEseUVBQWtFO0FBQ2xFLDJGQUFrRTtBQUNsRSxvR0FBMkU7QUFDM0UsMEZBQWlFO0FBRWpFLDJGQUFrRTtBQUVsRSxNQUFhLGFBQWMsU0FBUSx5Q0FBa0I7SUFDakQsWUFBWSxHQUF3QjtRQUNoQyxLQUFLLENBQUMsR0FBRyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxlQUFlO1FBRVgsSUFBSSxDQUFDLEdBQUc7YUFDSCxLQUFLLENBQUMsVUFBVSxDQUFDO2FBQ2pCLEdBQUcsQ0FBQyw0QkFBaUIsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBRWpELElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSw0QkFBaUIsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsR0FBRzthQUNILEtBQUssQ0FBQyxpQkFBaUIsQ0FBQzthQUN4QixHQUFHLENBQUMsNEJBQWlCLENBQUMsbUJBQW1CLEVBQ3RDLDRCQUFpQixDQUFDLHdCQUF3QixDQUFDO2FBQzlDLE1BQU0sQ0FBQyxpQ0FBc0IsQ0FBQyxtQkFBbUIsRUFDOUMsNEJBQWlCLENBQUMsc0JBQXNCLENBQUM7YUFDNUMsSUFBSSxDQUNELDRCQUFpQixDQUFDLGlDQUFpQyxFQUNuRCxpQ0FBc0IsQ0FBQyxtQkFBbUIsRUFDMUMsNEJBQWlCLENBQUMsaUJBQWlCLENBQ3RDLENBQUM7UUFFTixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDcEIsQ0FBQztDQUNKO0FBMUJELHNDQTBCQyJ9