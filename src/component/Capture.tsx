import React, { useState, useCallback, useMemo } from 'react';
import html2canvas from 'html2canvas';

const Capture = () => {
    const [imgUrl, setImgUrl] = useState<string>('');

    const downloadURI = (uri: string, outputName: string) => {
        let link = document.createElement('a');
        link.download = outputName;
        link.href = uri;
        document.body.appendChild(link);
        link.click();
        link.remove(); // IE 미지원
    };

    const captureHtml = (className: string) => {
        const canvas = document.querySelector(className) as HTMLElement;
        html2canvas(canvas).then(function (img) {
            setImgUrl(img.toDataURL('image/png'));
            downloadURI(img.toDataURL('image/png'), 'saved.png');
            // downloadURI(imgUrl, 'saved.png'); // 첫번째 클릭시 imgUrl이 ""라서 작동하지않음. 두번째 클릭부턴 정상적으로 작동함
        });
    };
    return (
        <>
            <button onClick={() => captureHtml('.barChart')}> capture barChart </button>
            <button onClick={() => captureHtml('.radarChart')}> capture radarChart </button>
            <div>추가된 이미지 url : {imgUrl}</div>
        </>
    );
};

export default Capture;
