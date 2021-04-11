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
class PublishMiddleware {
    validateRequiredPublishBodyFields(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            if (req.body && req.body.topic && req.body.message) {
                next();
            }
            else {
                res.status(400).send({
                    error: 'Missing required fields topic and message',
                });
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
            const subscriptions = yield subscriptions_service_1.default.readByIdAll(req.body.topic);
            req.body.data = {
                message: req.body.message,
                data: subscriptions
            };
            next();
        });
    }
}
exports.default = new PublishMiddleware();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGlzaC5taWRkbGV3YXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbWlkZGxld2FyZS9wdWJsaXNoLm1pZGRsZXdhcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSw4RkFBcUU7QUFDckUsa0RBQTBCO0FBRTFCLE1BQU0sR0FBRyxHQUFvQixlQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUMzRCxNQUFNLGlCQUFpQjtJQUViLGlDQUFpQyxDQUNuQyxHQUFvQixFQUNwQixHQUFxQixFQUNyQixJQUEwQjs7WUFFMUIsSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNoRCxJQUFJLEVBQUUsQ0FBQzthQUNWO2lCQUFNO2dCQUNILEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUNqQixLQUFLLEVBQUUsMkNBQTJDO2lCQUNyRCxDQUFDLENBQUM7YUFDTjtRQUNMLENBQUM7S0FBQTtJQUVLLG1CQUFtQixDQUNyQixHQUFvQixFQUNwQixHQUFxQixFQUNyQixJQUEwQjs7WUFFMUIsTUFBTSxZQUFZLEdBQUcsTUFBTSwrQkFBb0IsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMzRSxJQUFJLFlBQVksRUFBRTtnQkFDZCxJQUFJLEVBQUUsQ0FBQzthQUNWO2lCQUFNO2dCQUNILEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUNqQixLQUFLLEVBQUUsU0FBUyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssWUFBWTtpQkFDL0MsQ0FBQyxDQUFDO2FBQ047UUFDTCxDQUFDO0tBQUE7SUFFSyxZQUFZLENBQ2QsR0FBb0IsRUFDcEIsR0FBcUIsRUFDckIsSUFBMEI7O1lBRzFCLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ2xDLE1BQU0sYUFBYSxHQUFHLE1BQU0sK0JBQW9CLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDN0UsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUc7Z0JBQ1osT0FBTyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTztnQkFDekIsSUFBSSxFQUFFLGFBQWE7YUFDdEIsQ0FBQTtZQUNELElBQUksRUFBRSxDQUFDO1FBQ1gsQ0FBQztLQUFBO0NBR0o7QUFFRCxrQkFBZSxJQUFJLGlCQUFpQixFQUFFLENBQUMifQ==