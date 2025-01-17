import { Registry } from "@/registry/schema";

export const ui: Registry = [
  {
    name: "adaptive-container",
    type: "registry:ui",
    dependencies: ["react-use-measure", "motion"],
    files: [
      {
        path: "ui/adaptive-container.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "rating",
    type: "registry:ui",
    // dependencies: ["react-use-measure", "motion"],
    files: [
      {
        path: "ui/rating.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "face-rating",
    type: "registry:ui",
    // dependencies: ["react-use-measure", "motion"],
    files: [
      {
        path: "ui/face-rating.tsx",
        type: "registry:ui",
      },
    ],
  },

  {
    name: "star-rating",
    type: "registry:ui",
    // dependencies: ["react-use-measure", "motion"],
    files: [
      {
        path: "ui/star-rating.tsx",
        type: "registry:ui",
      },
    ],
  },

  {
    name: "upvote-downvote-rating",
    type: "registry:ui",
    // dependencies: ["react-use-measure", "motion"],
    files: [
      {
        path: "ui/upvote-downvote-rating.tsx",
        type: "registry:ui",
      },
    ],
  },

  {
    name: "variant-selector",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-radio-group", "lucide-react"],
    files: [
      {
        path: "ui/variant-selector.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "variant-selector-color",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-radio-group", "lucide-react"],
    files: [
      {
        path: "ui/variant-selector-color.tsx",
        type: "registry:ui",
      },
    ],
  },
];
