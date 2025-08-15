declare module "three/examples/jsm/loaders/GLTFLoader" {
  import { Loader } from "three";
  import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
  export { GLTF };
  export class GLTFLoader extends Loader {
    load(
      url: string,
      onLoad: (gltf: GLTF) => void,
      onProgress?: (event: ProgressEvent) => void,
      onError?: (event: unknown) => void
    ): void;
  }
}

declare module "three/examples/jsm/loaders/RGBELoader" {
  import { Loader, DataTexture } from "three";
  export class RGBELoader extends Loader {
    load(
      url: string,
      onLoad: (texture: DataTexture) => void,
      onProgress?: (event: ProgressEvent) => void,
      onError?: (event: unknown) => void
    ): void;
  }
}

declare module "three/examples/jsm/loaders/EXRLoader" {
  import { Loader, DataTexture } from "three";
  export class EXRLoader extends Loader {
    load(
      url: string,
      onLoad: (texture: DataTexture) => void,
      onProgress?: (event: ProgressEvent) => void,
      onError?: (event: unknown) => void
    ): void;
  }
}
