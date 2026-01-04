import logger from "../utils/logger.ts";
import kp from "../producer/kafkaProducer.ts";
import {type NewsEvent, NewsEventSchema} from "../entities/proto/news/news_pb.ts";
import {create} from "@bufbuild/protobuf";

// don't forget to set SOURCE_ID in your .env file
const sourceID = Bun.env.SOURCE_ID as string;

// Basically anything can be here

// This snipped sends a test NewsEvent to Kafka.
// Remember to create an actual sourceId in your system and replace "your-source-id" with it
// or else the unique constraint will fail on the main service.

const event: NewsEvent = create(NewsEventSchema, {
    sourceId: sourceID,
    title: "some title",
    content:  "some content",
    publishedAt: BigInt(Date.now()),
});

await kp.sendProtoNewsEvent(event);

// It is also highly recommended to use a proper logger provided in the template instead of console.log
logger.info("Test NewsEvent sent to Kafka");