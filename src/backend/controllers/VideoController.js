import { requiresAuth } from "backend/utils/authUtils";
import { Response } from "miragejs";
import { v4 as uuid } from "uuid";

/**
 * All the routes related to Videos are present here.
 * These are Publicly accessible routes.
 * */

/**
 * This handler handles gets all videos in the db.
 * send GET Request at /api/videos
 * */

export const getAllVideosHandler = function () {
  try {
    return new Response(200, {}, { videos: this.db.videos });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler handles uploads a new video to the db.
 * send POST Request at /api/user/videos/
 * */

// TODO: postVideoHandler
export const addNewVideoHandler = function (schema, request) {
  const user = requiresAuth.call(this, request);
  try {
    if (!user) {
      return new Response(
        404,
        {},
        {
          errors: ["The email you entered is not Registered. Not Found error"],
        }
      );
    }
    const { video } = JSON.parse(request.requestBody);
    if (user.videos.some((item) => item._id === video.id)) {
      return new Response(
        409,
        {},
        {
          errors: ["The video is already in your database"],
        }
      );
    }
    user.videos.push({ video, _id: uuid() });
    return new Response(201, {}, { videos: user.videos });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

export const addNewBulkVideosHandler = function (schema, request) {
  const user = requiresAuth.call(this, request);
  try {
    if (!user) {
      return new Response(
        404,
        {},
        {
          errors: ["The email you entered is not Registered. Not Found error"],
        }
      );
    }
    const { videos } = JSON.parse(request.requestBody);

    if (user.videos.map((v) => v._id).some((i) => videos.includes(i))) {
      return new Response(
        409,
        {},
        {
          errors: ["These videos are already in your database"],
        }
      );
    }
    //user.videos.push()
    videos.forEach((video) => user.videos.push({ video, _id: uuid() }));
    return new Response(201, {}, { videos: user.videos });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler handles gets all videos in the db.
 * send GET Request at /api/user/videos/:videoId
 * */

export const getVideoHandler = function (schema, request) {
  const { videoId } = request.params;
  try {
    const video = schema.videos.findBy({ _id: videoId }).attrs;
    return new Response(200, {}, { video });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};
