# NFProducer-template-bun

NFProducer is a Bun-based TypeScript application template designed to poll news events from cryptocurrency exchanges (e.g., Bitget) and produce them to Apache Kafka for downstream consumption by systems like NewsFinder. It uses Protocol Buffers for efficient message serialization and includes utilities for logging and UUID generation.

### Related topics

1. [NewsFinder](https://github.com/lein3000zzz/NewsFinder) - The main Go-based consumer and analyzer.

2. [News Producer Bitget Example](https://github.com/lein3000zzz/NFProducer-bitget) - A direct implementation based on this template.

3. [NewsAnalyzed Consumer Bun Template](https://github.com/lein3000zzz/NFConsumer-template-bun)

4. [The Telegram Bot](https://t.me/crypto_NewsFinderBot)

### Features

- News Polling: Periodically fetches news events from exchange APIs (e.g., Bitget) since WebSocket APIs are often unavailable for news.

- Kafka Production: Sends serialized news events to Kafka topics using Protocol Buffers.

- Protobuf Serialization: Ensures efficient and structured data exchange across services.

- Logging: Integrated logging with configurable levels using Logtape.

- UUID Generation: Utility script for generating UUIDv7 for consistent source identification.

### Prerequisites

- Bun (latest version recommended, build on 1.3.5)

### Installation

- Clone the repository:
```Bash
git clone https://github.com/lein3000zzz/NFProducer-template-bun.git
cd NFProducer-template-bun
```

- Install dependencies:

```bash
bun install
```
- Set up environment variables: Create a .env file in the root directory (see the Configuration section).

### Usage

- Generating a Source UUID:

```Bash
bun run uuid
```
- Start the producer:

```Bash
bun run start
```

- Docker

  - Ensure Docker and Docker Compose are installed, then run:
    ```Bash
    docker compose up -d
    ```

### Configuration

- Create a .env file in the root directory with the following variables:
```
LOGGING_LEVEL	trace, debug, info, warning, error, fatal
KAFKA_BROKERS	Comma-separated list (e.g., localhost:9092)
KAFKA_CLIENT_ID	Client identifier (e.g., bitget-producer)
KAFKA_DEFAULT_TOPIC	Destination topic (e.g., newsevents)
KAFKA_USERNAME	Username for Kafka authentication (optional)
KAFKA_PASSWORD	Password for Kafka authentication (optional)
License
```

This project is licensed under the terms specified in the LICENSE file.