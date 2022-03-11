import { Request, Response, NextFunction } from 'express';
const dao = require('../dao/videoDataDao');

interface VideoMetadata {
    id: Number,
    name: String,
    description: String,
    txn_hash: String,
    nft_cid: String,
    video_cid: String,
    wallet_address: String,
    video_duration: Number
}

const addVideo = async (req: Request, res: Response, next: NextFunction) => {
    let name: Number = req.body.name;
    let description: String = req.body.description;
    let txn_hash: String = req.body.txn_hash;
    let nft_cid: String = req.body.nft_cid;
    let video_cid: String = req.body.video_cid;
    let wallet_address: String = req.body.wallet_address;
    let video_duration: Number = req.body.video_duration;

    console.log("Request Body: {\n name: " + name 
    + ",\n description: " + description
    + ",\n txn_hash: " + txn_hash
    + ",\n nft_cid: " + nft_cid
    + ",\n video_cid: " + video_cid
    + ",\n wallet_address: " + wallet_address
    + ",\n video_duration: " + video_duration
    );

    if(name == null || description == null || txn_hash == null || nft_cid == null ||
        video_cid == null || wallet_address == null || video_duration == null) {
            return res.status(400).json({
                message: "[BAD REQUEST]:  Mandatory param(s) missing"
            });
    };

    let result = await dao.putVideoData(name, description, txn_hash, nft_cid, video_cid, wallet_address, video_duration);
    return res.status(200).json({
        message: "Video uploaded successfully!"
    });
    
};

const getAll = async (req: Request, res: Response, next: NextFunction) => {
    var data: VideoMetadata[] = [];
    let result = await dao.getAllVideos();
    for(let i = 0; i < result.length; i++) {
        data.push({
            id: result[i].id,
            name: result[i].name,
            description: result[i].description,
            txn_hash: result[i].txn_hash,
            nft_cid: result[i].nft_cid,
            video_cid: result[i].video_cid,
            wallet_address: result[i].wallet_address,
            video_duration: result[i].video_duration,
        })
    }

    // Sample data
    // var data: VideoMetadata[] = 
    //     [
    //         {
    //             id: 1,
    //             name: "Video 1",
    //             description: "This is video 1",
    //             txn_hash: "VDXXXXXX0001",
    //             nft_cid: "NFTCIDVDXXXXXX0001",
    //             video_cid: "VDCIDVDXXXXXX0001",
    //             wallet_address: "WLTADDRXXXXXX0001",
    //             video_duration: 256
    //         },
    //         {
    //             id: 2,
    //             name: "Video 2",
    //             description: "This is video 2",
    //             txn_hash: "VDXXXXXX0002",
    //             nft_cid: "NFTCIDVDXXXXXX0002",
    //             video_cid: "VDCIDVDXXXXXX0002",
    //             wallet_address: "WLTADDRXXXXXX0002",
    //             video_duration: 653
    //         }
    //     ];
    return res.status(200).json({
        message: data
    });
};

export default {getAll, addVideo};