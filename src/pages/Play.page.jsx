import React from "react";

//Components
import Poster from "../components/Poster/Poster.Component";
import PlayFilters from "../components/PlayFilters/PlayFIlters.Component";

//Layout Hoc
import DefaultLayoutHoc from "../layout/Default.layout";

const PlayPage = () => {
  return (
    <>
      <div className="container mx-auto px-4 my-10">
        <div className="w-full flex flex-col-reverse lg:flex-row-reverse gap-4">
          <div className="lg:w-3/4 p-4 bg-white rounded">
            <h2 className="text-2xl font-bold mb-4">Plays in Kanpur, U.P</h2>
            <div className="flex flex-wrap">
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster
                  isPlay={true}
                  playSrc="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCA2IEF1Zw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00329412-sufnzfqqbu-portrait.jpg"
                  title="Kal Ki Chinta Nahi Karta ft. Ravi Gupta"
                  subtitle="Comedy Shows | Hindi | 16yrs + | 1hr 15mins"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster
                  isPlay={true}
                  playSrc="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA1IEF1Zw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00362597-tbzgjbwmxc-portrait.jpg"
                  title="Gaurav Kapoor Live - Standup comedy show"
                  subtitle="Comedy | Hindi | 16yrs + | 1hr 15mins"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster
                  isPlay={true}
                  playSrc="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCA0IEF1Zw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00362432-qcppkrguzf-portrait.jpg"
                  title="Open Mic : Comedy,Poetry,..."
                  subtitle="Comedy, Musical | Hindi, Engl..."
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster
                  isPlay={true}
                  playSrc="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMCBKYW4%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00357347-wlwdbteuap-portrait.jpg"
                  title="Kids Sudoku Championsh..."
                  subtitle="Education | English | 3yrs..."
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center">
                <Poster
                  isPlay={true}
                  playSrc="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCA0IEF1Zw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00363421-kvqfsuxwel-portrait.jpg"
                  title="yourMICSTERS comedy open mic - 10"
                  subtitle="Comedy, Musical | Hindi, English | 18yrs + | 1hr"
                />
              </div>
            </div>
          </div>

          <div className="lg:w-1/4 p-4 bg-white rounded">
            <h2 className="text-2xl font-bold mb-4">Filters</h2>
            <div>
              <PlayFilters
                title="Date"
                tags={["Today", "Tomorrow", "This Weekend"]}
              />
            </div>
            <div>
              <PlayFilters
                title="Language"
                tags={["English", "Hindi", "Tamil"]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DefaultLayoutHoc(PlayPage);
