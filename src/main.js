export const search = (query, type) => {
    const code = 'BQBSadGHO1V60RViJcM-BiEh6XGbfhPDoBWQ5c_YKwzr9AR4kgx0xVCH16r9iqwjkHidQQR6CT_qeyDUtdqKXmnsmTgdBCOM8yeJFoTxJrQccCaOPOIuCtaFaQaI6iqnF1XjZhghT96mo88n1EqTQkBxa6BMc_mKBPlkkh3yN99_X_fV3NrsffQCFrjdFPpZDelgIiVWGn0D-2oYA3no_cIAWl5kxI4lPaudWFGBvv3QqQP71cw22ysrQZCIxGMkXWardX1Vz9JkkdY';
    const complement = `access_token=${code}&token_type=bearer`;
    
    fetch(`https://api.spotify.com/v1/search?q=${query}&type=${type}&${complement}`)
        .then(data => data.json());
}

export const searchArtists = (query) => {
    search(query, 'artist');
}

export const searchAlbums = (query) => {
    search(query, 'album');
}

export const searchTracks = (query) => {
    search(query, 'track')
}

export const searchPlaylists = (query) => {
    search(query, 'playlist');
}