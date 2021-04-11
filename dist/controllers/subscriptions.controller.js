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
class SubscriptionController {
    listSubscriptions(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const subscriptions = yield subscriptions_service_1.default.readAll();
            res.status(200).send(subscriptions);
        });
    }
    listSubscriptionsById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const subscriptions = yield subscriptions_service_1.default.readByIdAll(req.body.topic);
            res.status(200).send(subscriptions);
        });
    }
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const subscription = yield subscriptions_service_1.default.readById(req.body.topic);
            res.status(200).send(subscription);
        });
    }
    getByIdandUrl(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const subscription = yield subscriptions_service_1.default.readByIdAndUrl(req.body.topic, req.body.url);
            res.status(200).send(subscription);
        });
    }
    createSubscription(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const subscription = yield subscriptions_service_1.default.create(req.body);
            res.status(201).send(subscription);
        });
    }
    removeSubscription(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const status = yield subscriptions_service_1.default.deleteById(req.body.id);
            res.status(204).send(status);
        });
    }
}
exports.default = new SubscriptionController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Vic2NyaXB0aW9ucy5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vY29udHJvbGxlcnMvc3Vic2NyaXB0aW9ucy5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRUEsOEZBQXFFO0FBRXJFLGtEQUEwQjtBQUUxQixNQUFNLEdBQUcsR0FBb0IsZUFBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFDM0QsTUFBTSxzQkFBc0I7SUFFbEIsaUJBQWlCLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDL0QsTUFBTSxhQUFhLEdBQUcsTUFBTSwrQkFBb0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUMzRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN4QyxDQUFDO0tBQUE7SUFFSyxxQkFBcUIsQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUNuRSxNQUFNLGFBQWEsR0FBRyxNQUFNLCtCQUFvQixDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdFLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7S0FBQTtJQUVLLE9BQU8sQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUNyRCxNQUFNLFlBQVksR0FBRyxNQUFNLCtCQUFvQixDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3pFLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7S0FBQTtJQUVLLGFBQWEsQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUMzRCxNQUFNLFlBQVksR0FBRyxNQUFNLCtCQUFvQixDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzdGLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7S0FBQTtJQUVLLGtCQUFrQixDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQ2hFLE1BQU0sWUFBWSxHQUFHLE1BQU0sK0JBQW9CLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUVqRSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN2QyxDQUFDO0tBQUE7SUFJSyxrQkFBa0IsQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUNoRSxNQUFNLE1BQU0sR0FBRyxNQUFNLCtCQUFvQixDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ2xFLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pDLENBQUM7S0FBQTtDQUNKO0FBRUQsa0JBQWUsSUFBSSxzQkFBc0IsRUFBRSxDQUFDIn0=