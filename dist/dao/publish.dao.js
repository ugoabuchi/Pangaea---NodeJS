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
const debug_1 = __importDefault(require("debug"));
class PublishDao {
    constructor() {
        this.publish = [];
        this.log = debug_1.default('app:in-memory-dao');
    }
    publishContent(content) {
        return __awaiter(this, void 0, void 0, function* () {
            this.publish.push(content);
            return {
                topic: content.topic,
                data: content.data
            };
        });
    }
    getPublishedContents() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.publish;
        });
    }
    getPublishedContentById(subId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.publish.find((content) => content.topic === subId);
        });
    }
    getSubPublishContentByIdAll(subId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.publish.filter((content) => content.topic === subId);
        });
    }
    removePublishedContentById(subId) {
        return __awaiter(this, void 0, void 0, function* () {
            const objIndex = this.publish.findIndex((obj) => obj.topic === subId);
            this.publish.splice(objIndex, 1);
            return {
                status: `${subId} removed`
            };
        });
    }
}
exports.default = new PublishDao();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGlzaC5kYW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9kYW8vcHVibGlzaC5kYW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQSxrREFBMEI7QUFFMUIsTUFBTSxVQUFVO0lBQWhCO1FBRUksWUFBTyxHQUE0QixFQUFFLENBQUM7UUFDdEMsUUFBRyxHQUFvQixlQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQW1DdEQsQ0FBQztJQWpDUyxjQUFjLENBQUMsT0FBeUI7O1lBRTFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzNCLE9BQU87Z0JBQ0gsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLO2dCQUNwQixJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUk7YUFDckIsQ0FBQztRQUNOLENBQUM7S0FBQTtJQUVLLG9CQUFvQjs7WUFDdEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3hCLENBQUM7S0FBQTtJQUVLLHVCQUF1QixDQUFDLEtBQWE7O1lBQ3ZDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUEwQixFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxLQUFLLEtBQUssQ0FBQyxDQUFDO1FBQ3RGLENBQUM7S0FBQTtJQUVLLDJCQUEyQixDQUFDLEtBQWE7O1lBQzNDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUEwQixFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxLQUFLLEtBQUssQ0FBQyxDQUFDO1FBQ3hGLENBQUM7S0FBQTtJQUdLLDBCQUEwQixDQUFDLEtBQWE7O1lBQzFDLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUNuQyxDQUFDLEdBQXNCLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUNsRCxDQUFDO1lBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLE9BQU87Z0JBQ0gsTUFBTSxFQUFFLEdBQUcsS0FBSyxVQUFVO2FBQzdCLENBQUM7UUFDTixDQUFDO0tBQUE7Q0FHSjtBQUVELGtCQUFlLElBQUksVUFBVSxFQUFFLENBQUMifQ==