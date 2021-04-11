"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const subscriptions_service_1 = __importDefault(require("../services/subscriptions.service"));
const debug_1 = __importDefault(require("debug"));
const log = debug_1.default('app:users-controller');
class SubscriptionMiddleware {
    validateRequiredSubscriptionBodyFields(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            if (req.body && req.body.url && req.body.topic) {
                next();
            }
            else {
                res.status(400).send({
                    error: 'Missing required fields url and topic',
                });
            }
        });
    }
    validateSameTopicDoesntExist(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const subscription = yield subscriptions_service_1.default.readById(req.body.topic);
            if (subscription) {
                res.status(400).send({ error: 'Topic already exists' });
            }
            else {
                next();
            }
        });
    }
    validateSameUrlDoesntExistInTopic(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const subscription = yield subscriptions_service_1.default.readByIdAndUrl(req.body.topic, req.body.url);
            if (subscription) {
                res.status(400).send({ error: 'Subscription already exists' });
            }
            else {
                next();
            }
        });
    }
    validateSameTopicBelongToSameUser(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const subscription = yield subscriptions_service_1.default.readById(req.body.topic);
            if (subscription && subscription.id === req.params.topic) {
                next();
            }
            else {
                res.status(400).send({ error: 'Invalid topic' });
            }
        });
    }
    validateTopicExists(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const subscription = yield subscriptions_service_1.default.readById(req.params.topic);
            if (subscription) {
                next();
            }
            else {
                res.status(404).send({
                    error: `Topic ${req.params.topic} not found`,
                });
            }
        });
    }
    extractTopic(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            req.body.topic = req.params.topic;
            next();
        });
    }
}
exports.default = new SubscriptionMiddleware();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Vic2NyaXB0aW9uLm1pZGRsZXdhcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9taWRkbGV3YXJlL3N1YnNjcmlwdGlvbi5taWRkbGV3YXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsOEZBQXFFO0FBQ3JFLGtEQUEwQjtBQUUxQixNQUFNLEdBQUcsR0FBb0IsZUFBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFDM0QsTUFBTSxzQkFBc0I7SUFFbEIsc0NBQXNDLENBQ3hDLEdBQW9CLEVBQ3BCLEdBQXFCLEVBQ3JCLElBQTBCOztZQUUxQixJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQzVDLElBQUksRUFBRSxDQUFDO2FBQ1Y7aUJBQU07Z0JBQ0gsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQ2pCLEtBQUssRUFBRSx1Q0FBdUM7aUJBQ2pELENBQUMsQ0FBQzthQUNOO1FBQ0wsQ0FBQztLQUFBO0lBRUssNEJBQTRCLENBQzlCLEdBQW9CLEVBQ3BCLEdBQXFCLEVBQ3JCLElBQTBCOztZQUUxQixNQUFNLFlBQVksR0FBRyxNQUFNLCtCQUFvQixDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3pFLElBQUksWUFBWSxFQUFFO2dCQUNkLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLHNCQUFzQixFQUFFLENBQUMsQ0FBQzthQUMzRDtpQkFBTTtnQkFDSCxJQUFJLEVBQUUsQ0FBQzthQUNWO1FBQ0wsQ0FBQztLQUFBO0lBRUssaUNBQWlDLENBQ25DLEdBQW9CLEVBQ3BCLEdBQXFCLEVBQ3JCLElBQTBCOztZQUUxQixNQUFNLFlBQVksR0FBRyxNQUFNLCtCQUFvQixDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzdGLElBQUksWUFBWSxFQUFFO2dCQUNkLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLDZCQUE2QixFQUFFLENBQUMsQ0FBQzthQUNsRTtpQkFBTTtnQkFDSCxJQUFJLEVBQUUsQ0FBQzthQUNWO1FBQ0wsQ0FBQztLQUFBO0lBR0ssaUNBQWlDLENBQ25DLEdBQW9CLEVBQ3BCLEdBQXFCLEVBQ3JCLElBQTBCOztZQUUxQixNQUFNLFlBQVksR0FBRyxNQUFNLCtCQUFvQixDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3pFLElBQUksWUFBWSxJQUFJLFlBQVksQ0FBQyxFQUFFLEtBQUssR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7Z0JBQ3RELElBQUksRUFBRSxDQUFDO2FBQ1Y7aUJBQU07Z0JBQ0gsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLENBQUMsQ0FBQzthQUNwRDtRQUNMLENBQUM7S0FBQTtJQUVLLG1CQUFtQixDQUNyQixHQUFvQixFQUNwQixHQUFxQixFQUNyQixJQUEwQjs7WUFFMUIsTUFBTSxZQUFZLEdBQUcsTUFBTSwrQkFBb0IsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMzRSxJQUFJLFlBQVksRUFBRTtnQkFDZCxJQUFJLEVBQUUsQ0FBQzthQUNWO2lCQUFNO2dCQUNILEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUNqQixLQUFLLEVBQUUsU0FBUyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssWUFBWTtpQkFDL0MsQ0FBQyxDQUFDO2FBQ047UUFDTCxDQUFDO0tBQUE7SUFFSyxZQUFZLENBQ2QsR0FBb0IsRUFDcEIsR0FBcUIsRUFDckIsSUFBMEI7O1lBRTFCLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ2xDLElBQUksRUFBRSxDQUFDO1FBQ1gsQ0FBQztLQUFBO0NBR0o7QUFFRCxrQkFBZSxJQUFJLHNCQUFzQixFQUFFLENBQUMifQ==