const conn = require('../util/mysqlPool');
const query = require('../constants/queries');
const com = require('../constants/common');


exports.findVideoById = async(id) => {
    return await conn.pool.query(query.FIND_VIDEO_BY_ID, com.constructSQLData({id : id}));
}

exports.getAllVideos = async() => {
    return await conn.pool.query(query.GET_ALL_VIDEOS, com.constructSQLData({}));
}

exports.putVideoData = async(name, description, txn_hash, nft_cid, video_cid, wallet_address, video_duration, trailer_nft_cid, trailer_video_cid, image_cid) => {
    return await conn.pool.query(query.INSERT_VIDEO_DATA, [name, description, txn_hash, nft_cid, video_cid, wallet_address, video_duration, trailer_nft_cid, trailer_video_cid, image_cid])
}
