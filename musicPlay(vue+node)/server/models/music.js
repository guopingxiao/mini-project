"use strict"
class Music {
  /**
   * 构造音乐对象
   * @param  {number} id       标识
   * @param  {string} name     歌曲名
   * @param  {string} artist   艺术家
   * @param  {number} duration 时长
   * @param  {string} music    歌曲文件名
   * @param  {string} poster   海报文件名
   * @param  {string} lyric    歌词文件名
   * @return {Music}           音乐对象
   */
  constructor(id, name, artist, duration, music, poster, lyric) {
    this.id = id
    this.name = name
    this.artist = artist
    this.duration = duration
    this.music = music
    this.poster = poster
    this.lyric = lyric
  }

  static find() {
    return storage
  }

  static findOne(id) {
    return storage.find(s => s.id === id)
  }

  delete() {
    return storage.splice(storage.indexOf(this), 1)
  }

  save() {
    storage.indexOf(this) === -1 && storage.push(this)
    return true
  }

  update() {
    return true
  }
}

const storage = [
  new Music(1,    '17岁',             '刘德华',     342,    '17岁.mp3',     '17岁.png',           '17岁.lrc'     ),
  new Music(2,    '白若溪 - 追梦人 (Live) (白若溪淘汰)',                  '白若溪',   342,    '白若溪 - 追梦人 (Live) (白若溪淘汰).mp3',        '白若溪 - 追梦人 (Live) (白若溪淘汰).jpg',         'Rebecca Blaylock - I Will Be Your Shelter.lrc'        ),
  new Music(3,    '包师语 - 安和桥 (Live) (选择导师：周杰伦)',                              '包师语',             342,    '包师语 - 安和桥 (Live) (选择导师：周杰伦).mp3',                              '包师语.jpg',                   '包师语 - 安和桥 (Live) (选择导师：周杰伦).lrc'                              ),
  new Music(4,    '蔡健雅 - 当我想你的时候 (Live)',                                '蔡健雅',         342,    '蔡健雅 - 当我想你的时候 (Live).mp3',                            '蔡健雅 - 当我想你的时候 (Live).jpg',               '蔡健雅 - 当我想你的时候 (Live).lrc'                            ),
  new Music(5,    '蒋敦豪 - 乌兰巴托的夜 (Live) (蒋敦豪胜出)',                          '蒋敦豪',         342,    '蒋敦豪 - 乌兰巴托的夜 (Live) (蒋敦豪胜出).mp3',                      '蒋敦豪 - 乌兰巴托的夜 (Live) (蒋敦豪胜出).jpg',               '蒋敦豪 - 乌兰巴托的夜 (Live) (蒋敦豪胜出).lrc'                      ),
  new Music(6,    '刘德华 - 来生缘',   '刘德华',             342,    '刘德华 - 来生缘.mp3',   '刘德华.jpg',                   '刘德华 - 来生缘.lrc'   )
]

module.exports = Music
