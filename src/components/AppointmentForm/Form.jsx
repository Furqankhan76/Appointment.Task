import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import CustomAlert from "../customAlerts/customalert";


function ScheduleMeetingForm() {
  const navigate = useNavigate(); // Initialize useNavigate
  const [formData, setFormData] = useState({
    summary: "",
    description: "",
    day: "",
    startSlot: "",
    endSlot: "",
    attendees: ["furqan@standardtouch.com"], // Default attendee
  });

  const [isAlertOpen, setIsAlertOpen] = useState(false); // Alert visibility
  const [alertMessage, setAlertMessage] = useState(""); // Alert message

  const [isStartDropdownOpen, setIsStartDropdownOpen] = useState(false);
  const [isEndDropdownOpen, setIsEndDropdownOpen] = useState(false);

  const timeSlots = [
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
  ];

  const timeSlotsInMinutes = timeSlots.map((slot) => {
    const [hour, minute] = slot.split(":");
    const ampm = slot.split(" ")[1];
    let hourIn24 = parseInt(hour);
    if (ampm === "PM" && hourIn24 !== 12) {
      hourIn24 += 12;
    }
    return hourIn24 * 60 + parseInt(minute); // Convert to minutes
  });

  const handleSlotSelect = (slotType, value) => {
    setFormData({ ...formData, [slotType]: value });
    if (slotType === "startSlot") setIsStartDropdownOpen(false);
    if (slotType === "endSlot") setIsEndDropdownOpen(false);
  };

  const handleAttendeeChange = (index, value) => {
    const updatedAttendees = [...formData.attendees];
    updatedAttendees[index] = value;
    setFormData({ ...formData, attendees: updatedAttendees });
  };

  const addAttendeeField = () => {
    setFormData({ ...formData, attendees: [...formData.attendees, ""] });
  };

  const removeAttendee = (index) => {
    const updatedAttendees = formData.attendees.filter((_, i) => i !== index);
    setFormData({ ...formData, attendees: updatedAttendees });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.startSlot || !formData.endSlot) {
      alert("Please select both start and end time slots.");
      return;
    }

    // Helper function to convert time to 24-hour format
    const formatTimeToISO = (time) => {
      const [hourMinute, period] = time.split(" ");
      let [hour, minute] = hourMinute.split(":").map(Number);

      if (period === "PM" && hour !== 12) {
        hour += 12;
      } else if (period === "AM" && hour === 12) {
        hour = 0;
      }

      return `${hour.toString().padStart(2, "0")}:${minute
        .toString()
        .padStart(2, "0")}:00`; // Ensures HH:mm:ss format
    };

    const startDateTime = `${formData.day}T${formatTimeToISO(
      formData.startSlot
    )}`;
    const endDateTime = `${formData.day}T${formatTimeToISO(formData.endSlot)}`;

    const meetingData = {
      summary: formData.summary,
      description: formData.description || "",
      start: {
        dateTime: startDateTime,
        timeZone: "Asia/Kolkata",
      },
      end: {
        dateTime: endDateTime,
        timeZone: "Asia/Kolkata",
      },
      attendees: formData.attendees
        .filter((email) => email.trim() !== "")
        .map((email) => ({ email })),
      conferenceData: {
        createRequest: {
          requestId: `meet-${Date.now()}`,
          conferenceSolutionKey: {
            type: "hangoutsMeet",
          },
          parameters: {
            addMeetLink: "true",
          },
        },
      },
    };

    console.log("Meeting Data:", meetingData);

    try {
      const accessToken = localStorage.getItem("google_access_token");

      const response = await axios.post(
        "https://cors-anywhere.herokuapp.com/https://www.googleapis.com/calendar/v3/calendars/primary/events?sendUpdates=all",
        meetingData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
            "X-Goog-Conference-Data-Version": "1",
          },
        }
      );

      console.log("Full API Response:", response.data);
      const meetLink = response.data.hangoutLink;
      console.log("Google Meet Link:", meetLink);

       setAlertMessage(
         "Thank you for scheduling the meeting! Meeting details will be sent to your email shortly."
       );
      setIsAlertOpen(true);

    } catch (error) {
      console.error("Error creating event:", error);
      if (error.response) {
        console.error("API Response Error:", error.response.data);
      } else if (error.request) {
        console.error("No response received. Request details:", error.request);
      } else {
        console.error("Error setting up the request:", error.message);
      }
       setAlertMessage(
         "Error scheduling the meeting. Please try again later or contact support."
       );
       setIsAlertOpen(true);
    }
  };

   const handleAlertConfirm = () => {
     setIsAlertOpen(false); // Close the alert
     if (alertMessage.startsWith("Thank you")) {
       navigate("/"); // Redirect only on success
     }
   };

  const filterEndSlots = () => {
    if (!formData.startSlot) return timeSlots;
    const startIndex =
      timeSlotsInMinutes[timeSlots.indexOf(formData.startSlot)];
    return timeSlots.filter(
      (_, index) => timeSlotsInMinutes[index] > startIndex
    );
  };

  return (
    <div className="min-h-screen bg-gray-100  dark:bg-gray-800 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">
          Schedule a Meeting
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Day
            </label>
            <input
              type="date"
              name="day"
              value={formData.day}
              onChange={(e) =>
                setFormData({ ...formData, day: e.target.value })
              }
              className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 focus:ring-[#e4212a] focus:border-[#e4212a]"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Summary
            </label>
            <input
              type="text"
              name="summary"
              value={formData.summary}
              onChange={(e) =>
                setFormData({ ...formData, summary: e.target.value })
              }
              className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 focus:ring-[#e4212a] focus:border-[#e4212a]"
              placeholder="Enter meeting summary"
              required
            />
          </div>

          <div className="relative inline-block text-left w-full">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Select Start Time
            </label>
            <button
              type="button"
              onClick={() => setIsStartDropdownOpen((prev) => !prev)}
              className="inline-flex w-full justify-between gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              {formData.startSlot || "Select Start Time"}
            </button>
            {isStartDropdownOpen && (
              <div className="absolute z-10 mt-2 w-full max-h-48 overflow-y-auto rounded-md bg-white shadow-lg ring-1 ring-black/5">
                {timeSlots.map((slot, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => handleSlotSelect("startSlot", slot)}
                    className="block w-full px-4 py-2 text-sm text-gray-700 text-left hover:bg-gray-100"
                  >
                    {slot}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="relative inline-block text-left w-full">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Select End Time
            </label>
            <button
              type="button"
              onClick={() => setIsEndDropdownOpen((prev) => !prev)}
              className="inline-flex w-full justify-between gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              disabled={!formData.startSlot} // Disable until start time is selected
            >
              {formData.endSlot || "Select End Time"}
            </button>
            {isEndDropdownOpen && formData.startSlot && (
              <div className="absolute z-10 mt-2 w-full max-h-48 overflow-y-auto rounded-md bg-white shadow-lg ring-1 ring-black/5">
                {filterEndSlots().map((slot, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => handleSlotSelect("endSlot", slot)}
                    className="block w-full px-4 py-2 text-sm text-gray-700 text-left hover:bg-gray-100"
                  >
                    {slot}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Attendees
            </label>
            {formData.attendees.map((email, index) => (
              <div key={index} className="flex items-center gap-2 mb-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => handleAttendeeChange(index, e.target.value)}
                  className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 focus:ring-[#e4212a] focus:border-[#e4212a]"
                  placeholder="Enter email address"
                  required
                  disabled={index === 0} // Default attendee cannot be edited
                />
                {index > 0 && (
                  <button
                    type="button"
                    onClick={() => removeAttendee(index)}
                    className="text-gray-500 hover:text-red-600"
                  >
                    🗑️
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={addAttendeeField}
              className="text-[#e4212a] dark:text-[#e4212a] mt-2 font-medium"
            >
              + Add More
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-[#e4212a] text-white font-bold py-2 px-4 rounded-md hover:bg-[#d01c1f] transition"
          >
            Schedule Meeting
          </button>
        </form>

        {isAlertOpen && (
          <CustomAlert message={alertMessage} onConfirm={handleAlertConfirm} />
        )}
      </div>
    </div>
  );
}

export default ScheduleMeetingForm;
