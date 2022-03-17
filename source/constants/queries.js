const QUERY = {
    FIND_VIDEO_BY_ID: 'select * from video_data where id = ?',
    GET_ALL_VIDEOS: 'select * from video_data',
    INSERT_VIDEO_DATA: 'insert into video_data(name, description, txn_hash, nft_cid, video_cid, wallet_address, video_duration, trailer_nft_cid, trailer_video_cid, image_cid) values (?,?,?,?,?,?,?,?,?,?)'
}

module.exports = QUERY;
