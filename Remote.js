class Remote{
    onOff(tv) {
        tv.setStatus(!tv.getStatus())
    }
    ChanelReset(tv, chanel){
        if (tv.getStatus()){
            tv.setChanel(chanel)
        }else {
            console.log('bat tv')
        }

    }
    volumeReset(tv){
        if (tv.getStatus()){
            if (tv.getVolume()<=3){
                tv.setVolume(tv.getVolume());
            } else {
                return 'max'
            }
        } else {
            console.log('bat TV')
        }
    }
}