import { Creator } from "./models/Creator.js";
import { AdRevenue } from "./strategies/AdRevenue.js";
import { Subscription } from "./strategies/Subscription.js";
import { BrandDeal } from "./strategies/BrandDeal.js";
import { LiveGift } from "./strategies/LiveGift.js";

console.log("=== Creator Monetization Platform ===");

const creator = new Creator("Sahil");

creator.addEarningStrategy(new AdRevenue(10000, 1.2));
creator.addEarningStrategy(new Subscription(500));
creator.addEarningStrategy(new BrandDeal(2000, 1.5));
creator.addEarningStrategy(new LiveGift(3000));

creator.display();