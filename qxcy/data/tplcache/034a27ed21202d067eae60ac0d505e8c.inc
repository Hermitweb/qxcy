<div class="newlist">
                                <div class="riqi">
                                    <div class="ri">[field:pubdate function="MyDate('d',@me)"/]</div>
                                    <div class="nianyue">[field:pubdate function="MyDate('Y-m',@me)"/]</div>
                                </div>
                                <div class="newtitles">
                                    <div class="newtitle" style="display: flex;justify-content: space-between;">
                                        <a href="[field:arcurl/]">[field:title/]</a>
                                        <span>所属栏目：[field:typename/]</span>
                                    </div>
                                    <div class="miaoshu">
                                        [field:description function="cn_substr(@me,600)"/]...
                                    </div>
                                    <p class="sj-ri">发布日期：[field:pubdate function="MyDate('Y-m-d',@me)"/]</p>
                                </div>
                            </div>