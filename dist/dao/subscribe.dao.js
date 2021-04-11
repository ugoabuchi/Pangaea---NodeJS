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
const shortid_1 = __importDefault(require("shortid"));
const debug_1 = __importDefault(require("debug"));
class SubscriptionsDao {
    constructor() {
        this.subscriptions = [];
        this.log = debug_1.default('app:in-memory-dao');
    }
    addSubscription(subscription) {
        return __awaiter(this, void 0, void 0, function* () {
            subscription.id = shortid_1.default.generate();
            this.subscriptions.push(subscription);
            return {
                url: subscription.url,
                topic: subscription.topic
            };
        });
    }
    ;
    getSubscriptions() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.subscriptions;
        });
    }
    getSubscriptionById(subId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.subscriptions.find((subscription) => subscription.topic === subId);
        });
    }
    getSubscriptionByIdAll(subId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.subscriptions.filter((subscription) => subscription.topic === subId);
        });
    }
    getTopicWhereUrlexist(subId, url) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.subscriptions.find((subscription) => subscription.topic === subId && subscription.url === url);
        });
    }
    removeSubscriptionById(subId) {
        return __awaiter(this, void 0, void 0, function* () {
            const objIndex = this.subscriptions.findIndex((obj) => obj.topic === subId);
            this.subscriptions.splice(objIndex, 1);
            return {
                status: `${subId} removed`
            };
        });
    }
}
exports.default = new SubscriptionsDao();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Vic2NyaWJlLmRhby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2Rhby9zdWJzY3JpYmUuZGFvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esc0RBQThCO0FBQzlCLGtEQUEwQjtBQUl6QixNQUFNLGdCQUFnQjtJQUF0QjtRQUVHLGtCQUFhLEdBQWlDLEVBQUUsQ0FBQztRQUNqRCxRQUFHLEdBQW9CLGVBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBcUN0RCxDQUFDO0lBbkNVLGVBQWUsQ0FBQyxZQUFtQzs7WUFDdEQsWUFBWSxDQUFDLEVBQUUsR0FBRyxpQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3JDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3RDLE9BQU87Z0JBQ0gsR0FBRyxFQUFFLFlBQVksQ0FBQyxHQUFHO2dCQUNyQixLQUFLLEVBQUUsWUFBWSxDQUFDLEtBQUs7YUFDNUIsQ0FBQztRQUNOLENBQUM7S0FBQTtJQUFBLENBQUM7SUFFSSxnQkFBZ0I7O1lBQ2xCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUM5QixDQUFDO0tBQUE7SUFFSyxtQkFBbUIsQ0FBQyxLQUFhOztZQUNuQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBK0IsRUFBRSxFQUFFLENBQUMsWUFBWSxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUMsQ0FBQztRQUN0RyxDQUFDO0tBQUE7SUFFSyxzQkFBc0IsQ0FBQyxLQUFhOztZQUN0QyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBK0IsRUFBRSxFQUFFLENBQUMsWUFBWSxDQUFDLEtBQUssS0FBSyxLQUFLLENBQUMsQ0FBQztRQUN4RyxDQUFDO0tBQUE7SUFFSyxxQkFBcUIsQ0FBQyxLQUFhLEVBQUUsR0FBVzs7WUFFbEQsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQTJDLEVBQUUsRUFBRSxDQUFDLFlBQVksQ0FBQyxLQUFLLEtBQUssS0FBSyxJQUFJLFlBQVksQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDOUksQ0FBQztLQUFBO0lBRUssc0JBQXNCLENBQUMsS0FBYTs7WUFDdEMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQ3pDLENBQUMsR0FBc0IsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssS0FBSyxLQUFLLENBQ2xELENBQUM7WUFDRixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDdkMsT0FBTztnQkFDSCxNQUFNLEVBQUUsR0FBRyxLQUFLLFVBQVU7YUFDN0IsQ0FBQztRQUNOLENBQUM7S0FBQTtDQUNKO0FBRUQsa0JBQWUsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDIn0=