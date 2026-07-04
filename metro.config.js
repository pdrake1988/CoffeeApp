import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { getDefaultConfig, mergeConfig } from "@react-native/metro-config";

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config = {};

export default mergeConfig(getDefaultConfig(__dirname), config);
