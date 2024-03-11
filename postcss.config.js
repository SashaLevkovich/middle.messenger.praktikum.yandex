import cssnano from "cssnano";
import postcssPresetEnv from "postcss-preset-env";
import autoprefixer from "autoprefixer";
import postcssNested from "postcss-nested";

export default {
  plugins: [
    cssnano({
      preset: "default",
    }),
    postcssPresetEnv({ stage: 1 }),
    autoprefixer(),
    postcssNested(),
  ],
};
